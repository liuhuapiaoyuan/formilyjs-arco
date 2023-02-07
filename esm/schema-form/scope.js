import { action } from "@formily/reactive";
function checkExsitInFieldDataSource(field) {
    var _a;
    return (((_a = field.dataSource) === null || _a === void 0 ? void 0 : _a.findIndex(function (_a) {
        var _b;
        var value = _a.value;
        return field.value === value || ((_b = field.value) === null || _b === void 0 ? void 0 : _b.includes(value));
    })) === -1);
}
export var useAsyncDataSource = function (service, checkExsit) {
    if (checkExsit === void 0) { checkExsit = true; }
    return function (field, form) {
        var _a;
        field.loading = true;
        service(field, form).then((_a = action === null || action === void 0 ? void 0 : action.bound) === null || _a === void 0 ? void 0 : _a.call(action, function (data) {
            field.dataSource = data;
            if (checkExsit && checkExsitInFieldDataSource(field)) {
                field.setValue(undefined);
            }
            field.loading = false;
        }));
    };
};
//# sourceMappingURL=scope.js.map