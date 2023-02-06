import React from "react";
import { connect, mapReadPretty, mapProps } from "@formily/react";
import { TreeSelect as ArcoTreeSelect } from "@arco-design/web-react";
import { PreviewText } from "../preview-text";
import { IconLoading } from "@arco-design/web-react/icon";
function convertTreeData(list:any[]){

  return list.map(z=>{
    let result = {
      ...z,
      title:z.title??z.label ,
    }
    if(Array.isArray(z.children)){
      result.children = convertTreeData(z.children)
    }
    return result
  })
}
//treeData  label
export const TreeSelect = connect(
  ArcoTreeSelect,
  mapProps(
    (props, field) => {
      const {dataSource = []} = field as any
      return {
        ...props,
        treeData:convertTreeData(dataSource)  , 
        suffixIcon:
          field?.["loading"] || field?.["validating"] ? (
            <IconLoading />
          ) : (
            props?.["arrowIcon"]
          ),
      }
    }
  ),
  mapReadPretty(PreviewText.TreeSelect)
);

export default TreeSelect;
