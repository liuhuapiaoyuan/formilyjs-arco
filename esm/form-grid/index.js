var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useLayoutEffect, useRef, useState, useContext } from 'react';
import { usePrefixCls, pickDataProps } from '../__builtins__';
import cls from 'classnames';
import { isValid, isNum, isBool, isEqual } from '@formily/shared';
import ResizeObserver from 'resize-observer-polyfill';
import { FormGridContext } from './context';
import './index.scss';
var S = 720;
var MD = 1280;
var LG = 1920;
var useLayout = function (props) {
    var intervals = props.intervals, minColumns = props.minColumns, maxColumns = props.maxColumns, minWidth = props.minWidth, maxWidth = props.maxWidth, colWrap = props.colWrap, columnGap = props.columnGap, rowGap = props.rowGap;
    var ref = useRef(null);
    var formGridPrefixCls = usePrefixCls('grid');
    var _a = __read(useState({}), 2), layoutParams = _a[0], setLayout = _a[1];
    var _b = __read(useState({}), 2), styles = _b[0], setStyles = _b[1];
    var calculateSmartColumns = function (target) {
        var _a;
        var clientWidth = target.clientWidth;
        var index = intervals.findIndex(function (interval) {
            var _a = __read(interval, 2), min = _a[0], max = _a[1];
            if (clientWidth >= min && max > clientWidth) {
                return true;
            }
            return false;
        });
        var takeMaxColumns = function () {
            return (maxColumns === null || maxColumns === void 0 ? void 0 : maxColumns[index]) || maxColumns;
        };
        var takeMinColumns = function () {
            return (minColumns === null || minColumns === void 0 ? void 0 : minColumns[index]) || minColumns || 1;
        };
        var takeColwrap = function () {
            return (colWrap === null || colWrap === void 0 ? void 0 : colWrap[index]) || colWrap || true;
        };
        var takeMinWidth = function () {
            var rMaxColumns = takeMaxColumns();
            if (isValid(minWidth)) {
                return minWidth[index] || 0;
            }
            else {
                if (isValid(rMaxColumns)) {
                    return Math.floor((clientWidth - (rMaxColumns - 1) * props.columnGap) / rMaxColumns);
                }
                else {
                    return 0;
                }
            }
        };
        var takeMaxWidth = function () {
            var rMinColumns = takeMinColumns();
            if (isValid(maxWidth)) {
                return maxWidth[index] || 0;
            }
            else {
                if (isValid(rMinColumns)) {
                    var calculated = Math.floor((clientWidth - (minColumns[index] - 1) * props.columnGap) /
                        minColumns[index]);
                    if (Infinity === calculated) {
                        return clientWidth;
                    }
                    return calculated;
                }
                else {
                    return Infinity;
                }
            }
        };
        return {
            minWidth: takeMinWidth(),
            maxWidth: takeMaxWidth(),
            columns: (_a = target === null || target === void 0 ? void 0 : target.childNodes) === null || _a === void 0 ? void 0 : _a.length,
            colWrap: takeColwrap(),
            minColumns: takeMinColumns(),
            maxColumns: takeMaxColumns(),
            clientWidth: clientWidth,
        };
    };
    useLayoutEffect(function () {
        var observer = function () {
            if (!ref.current)
                return;
            var params = calculateSmartColumns(ref.current);
            setLayout(params);
            var style = getStyle({ columnGap: columnGap, rowGap: rowGap, layoutParams: params, ref: ref });
            if (!isEqual(style, styles)) {
                setStyles(style);
            }
        };
        var resizeObserver = new ResizeObserver(observer);
        var mutationObserver = new MutationObserver(observer);
        if (ref.current) {
            resizeObserver.observe(ref.current);
            mutationObserver.observe(ref.current, {
                childList: true,
            });
        }
        return function () {
            if (!ref.current)
                return;
            resizeObserver.unobserve(ref.current);
            mutationObserver.disconnect();
        };
    }, []);
    return {
        ref: ref,
        formGridPrefixCls: formGridPrefixCls,
        layoutParams: layoutParams,
        styles: styles,
    };
};
var getStyle = function (props) {
    var _a;
    var columnGap = props.columnGap, rowGap = props.rowGap, layoutParams = props.layoutParams, ref = props.ref;
    // const max = layoutParams.maxWidth ? `${layoutParams.maxWidth}px` : '1fr';
    var _b = layoutParams, clientWidth = _b.clientWidth, minWidth = _b.minWidth, maxColumns = _b.maxColumns, minColumns = _b.minColumns;
    var getMinMax = function (minWidth, maxWidth) {
        if (!minWidth || !maxWidth)
            return;
        var minmax;
        if (minWidth === Infinity) {
            if (!isValid(maxWidth)) {
                minmax = '1fr';
            }
            else {
                minmax = "minmax(0px,".concat(maxWidth, "px)");
            }
        }
        else {
            minmax = "minmax(".concat(minWidth, "px,").concat(isValid(maxWidth) ? "".concat(maxWidth, "px") : '1fr', ")");
        }
        return minmax;
    };
    var spans = Array.from(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.childNodes) || []).reduce(function (buf, cur) {
        var span = isValid(maxColumns)
            ? Math.min((Number(cur.getAttribute('data-span')) || 1), maxColumns)
            : Number(cur.getAttribute('data-span')) || 1;
        return buf + Number(span);
    }, 0);
    var calc = Math.floor((clientWidth + columnGap) / (minWidth + columnGap));
    var finalColumns;
    finalColumns = Math.min(spans, calc);
    if (isValid(maxColumns)) {
        finalColumns = Math.min(spans, calc, maxColumns);
    }
    else {
        finalColumns = Math.min(spans, calc);
    }
    if (isValid(minColumns)) {
        if (finalColumns < minColumns) {
            finalColumns = minColumns;
        }
    }
    var style = {
        gridTemplateColumns: "repeat(".concat(finalColumns, ", ").concat(getMinMax(layoutParams === null || layoutParams === void 0 ? void 0 : layoutParams.minWidth, layoutParams === null || layoutParams === void 0 ? void 0 : layoutParams.maxWidth), ")"),
        gridGap: "".concat(rowGap, "px ").concat(columnGap, "px"),
    };
    return style;
};
export var useGridSpan = function (gridSpan) {
    if (gridSpan === void 0) { gridSpan = 1; }
    var params = useContext(FormGridContext);
    if (!isValid(params)) {
        return gridSpan;
    }
    var colWrap = params.colWrap, _a = params.columns, columns = _a === void 0 ? Infinity : _a, clientWidth = params.clientWidth, minWidth = params.minWidth, columnGap = params.columnGap, _b = params.maxColumns, maxColumns = _b === void 0 ? Infinity : _b;
    var calc = Math.floor((clientWidth + columnGap) / (minWidth + columnGap)); // 算出实际一行最多能塞进的格子数
    if (colWrap === true) {
        if (Math.min(calc, columns) >= gridSpan) {
            if (isValid(maxColumns)) {
                return Math.min(gridSpan, maxColumns);
            }
            return gridSpan;
        }
        else {
            if (isValid(maxColumns)) {
                return Math.min(calc, columns, maxColumns);
            }
            return Math.min(calc, columns);
        }
    }
    else {
        if (Math.min(calc, columns) >= gridSpan) {
            if (isValid(maxColumns)) {
                return Math.min(gridSpan, maxColumns);
            }
            return gridSpan;
        }
        else {
            if (isValid(maxColumns)) {
                return Math.min(calc, columns, maxColumns);
            }
            return Math.min(calc, columns);
        }
    }
};
export var FormGrid = function (props) {
    var normalizeProps = function (props) {
        var breakpoints = props.breakpoints;
        var intervals = breakpoints ? breakpoints.reduce(function (buf, cur, index, array) {
            if (index === array.length - 1) {
                return __spreadArray(__spreadArray([], __read(buf), false), [[array[index], Infinity]], false);
            }
            if (index === 0) {
                return __spreadArray(__spreadArray([], __read(buf), false), [[0, cur], [cur, array[index + 1]]], false);
            }
            return __spreadArray(__spreadArray([], __read(buf), false), [[cur, array[index + 1]]], false);
        }, []) : [];
        var normalize = function (prop) {
            if (isNum(prop) || isBool(prop)) {
                return intervals.map(function () { return prop; });
            }
            else if (Array.isArray(prop)) {
                var lastVal_1;
                return intervals.map(function (it, idx) {
                    var res = isValid(prop[idx]) ? prop[idx] : lastVal_1;
                    lastVal_1 = isValid(prop[idx]) ? prop[idx] : lastVal_1;
                    return res;
                });
            }
            else {
                return undefined;
            }
        };
        return __assign(__assign({}, props), { intervals: intervals, colWrap: normalize(props.colWrap), minWidth: normalize(props.minWidth), maxWidth: normalize(props.maxWidth), minColumns: normalize(props.minColumns), maxColumns: normalize(props.maxColumns) });
    };
    var children = props.children;
    var normalizedProps = normalizeProps(props);
    var _a = useLayout(normalizedProps), ref = _a.ref, formGridPrefixCls = _a.formGridPrefixCls, layoutParams = _a.layoutParams, styles = _a.styles;
    return (React.createElement(FormGridContext.Provider, { value: __assign({ columnGap: props.columnGap }, layoutParams) },
        React.createElement("div", __assign({}, pickDataProps(props), { className: cls("".concat(formGridPrefixCls, "-layout")), style: styles, ref: ref }), children)));
};
export var GridColumn = function (_a) {
    var gridSpan = _a.gridSpan, children = _a.children;
    var span = FormGrid.useGridSpan(gridSpan);
    return (React.createElement("div", { style: { gridColumnStart: "span ".concat(span) }, "data-span": span || 1 }, children));
};
GridColumn.defaultProps = {
    gridSpan: 1,
};
FormGrid.useGridSpan = useGridSpan;
FormGrid.GridColumn = GridColumn;
FormGrid.defaultProps = {
    columnGap: 10,
    rowGap: 5,
    minColumns: 0,
    minWidth: 100,
    breakpoints: [S, MD, LG],
    colWrap: true,
};
export default FormGrid;
//# sourceMappingURL=index.js.map