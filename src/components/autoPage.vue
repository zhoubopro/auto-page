<template>
  <div>
    <div class="page-0" id="page-0">
      <table
        id="hb-auto-page-table"
        style="width: 100%;"
        cellspacing="0"
        cellpadding="0"
      >
        <colgroup>
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
        </thead>
        <tbody v-for="(tdata, index) in tableData">
        <tr class="tbody-title">
          <td align="center">序号</td>
          <td class="cell-padding">申请单位</td>
          <td class="cell-padding" align="right">本次申请金额</td>
          <td class="cell-padding">申请金额比例</td>
          <td class="cell-padding" align="right">已付比例</td>
          <td class="cell-padding" align="right">合同总金额</td>
          <td class="cell-padding">收款单位</td>
          <td class="cell-padding">负责人</td>
          <td class="cell-padding">资金类别</td>
          <td class="cell-padding" align="right">流程历时</td>
        </tr>
        <tr>
          <td class="cell-padding td-border" align="center" rowspan="2">{{index + 1}}</td>
          <td class="cell-padding td-border" rowspan="2">{{tdata.sqdwdesc}}</td>
          <td class="cell-padding" align="right"> ¥ {{tdata.sqjecny}}</td>
          <td class="cell-padding">
            {{tdata.zb}}<br/>
            <span v-if="(tdata.yf.split('%')[0]*1+tdata.zb.split('%')[0]*1)>=100" style="text-align:left">
            <small style="font-family: 'Microsoft YaHei';">
              本次支付加以往支付已超过100%
            </small>
          </span>
          </td>
          <td class="cell-padding" align="right">{{tdata.yf}}</td>
          <td class="cell-padding" align="right"> ¥ {{tdata.htje}}</td>
          <td class="cell-padding">{{tdata.skdwdesc}}</td>
          <td class="cell-padding">{{tdata.jbrdesc}}</td>
          <td class="cell-padding">{{tdata.lx}}</td>
          <td class="cell-padding" align="right"><span>{{Util.formatNumToDate(tdata.lhour)}}</span></td>
        </tr>
        <tr>
          <td colspan="8" class="cell-padding td-border" v-html="tdata.zjythtml"></td>
        </tr>
        </tbody>
        <tfoot>
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
        </tfoot>
      </table>
    </div>
    <div class="hb-auto-page-print" id="hb-auto-page-print"></div>
  </div>
</template>
<script>

  import Moment from 'moment'
  import AutoPage from '@/assets/js/autoPage'

  export default {
    props: {
      selCount: {
        type: Number,
        default: 10
      },
      selMoney: {
        type: String,
        default: '0'
      }
    },
    data() {
      return {
        dateTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
        tableData:
          [
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            },
            {
              "bb": "CNY",
              "bk": "中国·北京·五环",
              "currenttime": "2018-08-02 17:05:42",
              "fj": "",
              "fjdesc": "",
              "fjname": "",
              "fkdw": 1,
              "fkdwdesc": "中国·北京·五环",
              "htje": "1000",
              "htjecny": "1000",
              "id": 8048,
              "issap": 0,
              "jbr": "",
              "jbrdesc": "Bo",
              "kmdesc": "1122	应收帐款",
              "lhour": 3353,
              "lx": "资产类",
              "operatetime": "",
              "receivetime": "2018-03-16 13:27:09",
              "requestid": 91046,
              "skdw": "11658",
              "skdwdesc": "北京科技有限公司",
              "sqbh": "54附件测试",
              "sqbm": 268,
              "sqbmdesc": "集团财务部",
              "sqdw": 1,
              "sqdwdesc": "中国·北京·五环",
              "sqje": "100",
              "sqjecny": "100",
              "sqjeusd": "14.68",
              "sqr": 1600,
              "sqrdesc": "Bo",
              "sqrq": "2018-03-16",
              "syje": "1000",
              "tableName": "formtable_main_25",
              "title": "54附件测试",
              "whour": 3339,
              "yf": "0%",
              "yfje": "",
              "zb": "10%",
              "zcpnumber": "华资-00-1000-201807-0170",
              "zjyt": "54附件测试"
            }
          ]
      }
    },
    computed: {},
    created() {
      this.tableData.forEach((object, index) => {
        object.zjythtml = '资金用途：<br />' + object.zjyt
      })
    },
    mounted() {
      let props = {
        selCount: this.selCount,
        selMoney: this.selMoney,
        dateTime: this.dateTime
      }
      AutoPage.init(530, 'hb-auto-page-print', props);
    },
    methods: {},
    watch: {}
  }
</script>
<style>
  .hb-auto-page-print {
    display: none;
    opacity: 0;
  }
  .page-0 table tr {
    border: none;
  }

  .page-0 table tr.tbody-title td {
    background: #D8D8D8;
    background-size: 100%;
  }

  .page-0 table tr td {
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    background: #ffffff;
  }

  .page-0 table tr td:last-child {
    border-right: 1px solid #000000;
  }

  .page-0 .cell-padding {
    padding: 0 10px;
  }

  .page-0 table tbody ~ tbody tr.tbody-title td {
    border-top: none;
  }

  .page-0 table tr:not(.tbody-title) td.td-border {
    border-bottom: 1px solid #000000;
  }

  .page-0 table tbody tr td.td-border {
    border-bottom: none;
  }

  .page-0 table tbody tr:nth-last-of-type(1) td {
    border-bottom: none;
  }
</style>

