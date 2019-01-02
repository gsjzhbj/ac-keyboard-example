/**
*
* @title table 快捷键示例应用。
* @description tab 键可以默认选中第一行、↑(上箭) 选中上一条、↓(下箭) 选中下一条 更多api 见文档说明。
*/

import React, { Component } from "react";
import {Checkbox, Button } from 'tinper-bee';
import Table from 'bee-table';


const columns = [
    {
      title: "",
      dataIndex: "d",
      key: "d",
      width:80,
      render(text, record, index) {
        return (
          <div style={{ position: 'relative' }} title={text} >
            <Checkbox />
          </div>
        );
      }
    },
    { title: "用户名", dataIndex: "a", key: "a", width:80 , className:"rowClassName"},
    { id: "123", title: "性别", dataIndex: "b", key: "b", width: 100 },
    { title: "年龄", dataIndex: "c", key: "c", width: 200 }
  ];
  
  const data = [
    { a: "令狐冲", b: "男", c: 41,d:'操作', key: "1" },
    { a: "杨过叔叔的女儿黄蓉", b: "男", c: 67,d:'操作', key: "2" },
    { a: "郭靖", b: "男", c: 25,d:'操作', key: "3" }
  ];
  
  class Demo1 extends Component {
  
    constructor(props){
        super(props);
        this.state = {
          data: data,
          selectedRowIndex: 2
        }
    }
  
    onKeyTab=()=>{
      let {selectedRowIndex} = this.state;
      // let count = selectedRowIndex;//(selectedRowIndex+1);
      // count == (data.length-1)?count = -1:count;
      // this.setState({
      //   selectedRowIndex: (count+1)
      // })
      console.log(" ---onKeyTab---- ",selectedRowIndex);
       this.setState({
        selectedRowIndex: 0
      })
    }
  
    onKeyUp=()=>{
      let {selectedRowIndex} = this.state;
      let count = selectedRowIndex;
      let len = (data.length-1);
      count = count == 0?count = len:(count-1);
      this.setState({
        selectedRowIndex: count
      })
    }
  
    onKeyDown=()=>{
      let {selectedRowIndex} = this.state;
      let count = selectedRowIndex;
      count == (data.length-1)?count = -1:(count+1);
      this.setState({
        selectedRowIndex: (count+1)
      })
    }
   
    onTableKeyDown = ()=>{
      let {selectedRowIndex} = this.state;
      console.log(" ----onTabkeKeyDown--- ",selectedRowIndex);
    }
   
    render() {
      return (
        <div className="demoPadding">
        <input />
        <Table
          columns={columns}
          data={data}
          rowClassName={(record,index,indent)=>{
            if (this.state.selectedRowIndex == index) {
                return 'selected';
            } else {
                return '';
            }
          }}
          onRowClick={(record,index,indent)=>{
            this.setState({ 
                selectedRowIndex: index
            });
          }}
          onKeyTab={this.onKeyTab}
          onKeyUp={this.onKeyUp}
          onKeyDown={this.onKeyDown}
          onTableKeyDown={this.onTableKeyDown} 
          scroll={{ x: "110%", y: 140 }}
        /> </div>
      );
    }
  }
  
  export default Demo1;
  