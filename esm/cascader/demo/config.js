var treeData = [
    {
        label: '浙江省',
        value: 'zhejiang',
        children: [
            {
                label: '杭州市',
                value: 'hangzhou',
                children: [
                    {
                        label: '西湖区',
                        value: 'xihu',
                    },
                    {
                        label: '萧山区',
                        value: 'xiaoshan',
                    },
                    {
                        label: '临安区',
                        value: 'linan',
                    },
                ],
            },
            {
                label: '宁波市',
                value: 'ningbo',
                children: [
                    {
                        label: '海曙区',
                        value: 'haishu',
                    },
                    {
                        label: '江北区',
                        value: 'jiangbei',
                    },
                ],
            },
        ],
    },
];
var addTreeData = function (field) {
    setTimeout(function () {
        field.dataSource = treeData;
    }, 10);
};
var config = {
    type: 'object',
    properties: {
        checkbox: {
            type: 'string',
            title: '级联',
            'x-decorator': 'FormItem',
            'x-component': 'Cascader',
            'enum': treeData,
            'x-component-props': {
                style: {
                    width: 400,
                },
            }
        },
        checkbox2: {
            type: 'string',
            title: '动态级联',
            'x-decorator': 'FormItem',
            'x-component': 'Cascader',
            'x-component-props': {
                style: {
                    width: 400,
                },
            },
            'x-reactions': [addTreeData],
        },
    },
};
export default config;
//# sourceMappingURL=config.js.map