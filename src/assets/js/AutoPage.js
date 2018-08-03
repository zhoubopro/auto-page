let AutoPage = {
  tableId: null, // tableId
  totalHeight: 530,//总的高度
  divID: null,//全文divID
  totalRecord: 0,//总记录数
  selCount: 0,
  selMoney: 0,
  dateTime: '',

  init(totalHeight, divID, props) {
    this.totalHeight = totalHeight;
    this.divID = divID;
    this.selCount = props.selCount
    this.selMoney = props.selMoney
    this.dateTime = props.dateTime
    //初始化分页信息
    this.initPage()
    //隐藏初始表格
    // this.hiddenContent()
  },

  initPage() {
    this.tableId = document.getElementById('hb-auto-page-table')
    let tbodyList = this.tableId.querySelectorAll('tbody')
    this.totalRecord = tbodyList.length //初始化总记录数

    let heightTmp = 0 //一页总高度
    let htmlTmp = "";  //临时存储正文
    let headerHeight = 90
    let htmlHeader = "<table cellspacing='0' cellpadding='0'>";
    let htmlFoot = "</table>";
    let page = 0
    heightTmp = headerHeight;
    for(let i = 0; i < this.totalRecord; i++){
      let tbodyHeight = tbodyList[i].clientHeight;//第i行高度
      let tbodyHTML = "<tbody>" + tbodyList[i].innerHTML + "</tbody>";//第i行内容
      heightTmp += tbodyHeight;
      if(heightTmp < this.totalHeight){
        if(heightTmp == headerHeight + tbodyHeight){
          htmlTmp += htmlHeader + this.initHeader(page)
          page++;//页码
        }
        htmlTmp += tbodyHTML
        if (i == this.totalRecord - 1) {
          htmlTmp += this.initFooter() + htmlFoot
        }
      }
      else{
        htmlTmp += this.initFooter() + htmlFoot + this.addPageBreak();
        i--;
        heightTmp = headerHeight;
      }
    }

    document.getElementById(this.divID).innerHTML = htmlTmp
    document.querySelectorAll('.total-page').forEach((object, index)=>{
      object.innerText = page
    })
  },
  initHeader(page) {
    let htmlHeader =
      `<colgroup>
        <col width="50">
        <col width="140">
        <col width="120">
        <col width="120">
        <col width="120">
        <col width="120">
        <col width="120">
        <col width="100">
        <col width="100">
        <col width="100">
      </colgroup>
       <thead style="display:table-header-group">
        <tr >
          <td colspan="10" style="height: 40px; border:none;">
          </td>
        </tr>
        <tr>
          <td
            colspan="10"
            align="center"
            style="height: 40px;font-size: 30px; border: none;"
          >
            资金审批单
          </td>
        </tr>
        <tr>
          <td
            colspan="6"
            style="font-size: 16px;height: 40px;border: none;">
            审批单号：<span class="approval-id"></span>（ 共 ${this.selCount} 条 ）
            &nbsp;&nbsp; 总金额：${this.selMoney}元
          </td>
          <td
            colspan="4"
            align="right"
            style="font-size: 16px;height: 40px;border: none;">
            &nbsp;&nbsp; 打印时间：${this.dateTime} 
            &nbsp;&nbsp; ${page + 1}/<span class="total-page"></span> 页
          </td>
        </tr>
      </thead>`

    return htmlHeader
  },
  initFooter() {
    let htmlFooter =
      `<tfoot>
        <tr>
          <td colspan="11" align="left" style="height: 100px;border: none;">
            &nbsp;
          </td>
        </tr>
        <tr>
          <td colspan="11" align="left" style="border: none;">
            董事长签字：___________________________
          </td>
        </tr>
        <tr>
          <td colspan="11" align="left" style="border: none;">
            &nbsp;
          </td>
        </tr>
        <tr>
          <td colspan="11" align="left" style="border: none;text-indent: 38px">
            日 期：___________________________
          </td>
        </tr>
        <tr>
          <td colspan="11" align="left" style="border: none;">
            &nbsp;
          </td>
        </tr>
      </tfoot>`

    return htmlFooter
  },
  hiddenContent(){
    // document.getElementById('page-0').style.display = 'none'
  },
  ////添加分页符
  addPageBreak: function () {
    return "<p style='page-break-before:always;'></p>";
  },
  setApprovalID(id){
    document.querySelectorAll('.approval-id').forEach((object, index)=>{
      object.innerText = 'ZJSP1808020001'
    })
  }
}

export default AutoPage
