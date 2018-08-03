<template>
  <div id="app">
    <button @click="print()">打印</button>
    <autoPage/>
  </div>
</template>

<script>
  import autoPage from '@/components/autoPage'
  import Print from 'print-js'

  export default {

    name: 'app',
    data() {
      return {
        msg: 'Table 表格打印 自动分页 '
      }
    },
    components: {
      autoPage
    },
    methods: {
      print() {
        const style = `
        @page { size: landscape; margin: 0mm 2mm }
        @media print {
          .hb-auto-page-print {
            display: block;
            opacity: 1;
          }
          .hb-auto-page-print table tr{
            border: none;
          }
          .hb-auto-page-print table tr.tbody-title td{
            background:#D8D8D8;
            background-size: 100%;
          }
          .hb-auto-page-print table tr td{
            border-top: 1px solid #000000;
            border-left: 1px solid #000000;
            background: #ffffff;
          }
          .hb-auto-page-print table tr td:last-child{
            border-right: 1px solid #000000;
          }
          .hb-auto-page-print .cell-padding{
            padding: 0 10px;
          }
          .hb-auto-page-print table tbody~tbody tr.tbody-title td{
            border-top: none;
          }
          .hb-auto-page-print table tr:not(.tbody-title) td.td-border{
            border-bottom: 1px solid #000000;
          }
          .hb-auto-page-print table tbody tr td.td-border{
            border-bottom: none;
          }
          .hb-auto-page-print table tbody tr:nth-last-of-type(1) td{
            border-bottom: none;
          }
        }`

        Print({
          printable: 'hb-auto-page-print',
          noPrintSelector: "no-print",
          type: 'html',
          scanStyles: false,
          mediaPrint: true,
          // css: './assets/css/print.css'
          // iframe : false,
          style: style,
          // showModal:true
        })

        console.log('create develop ')
      }
    }
  }
</script>

<style>

  @page {
    size: landscape;
    margin: 0mm 2mm
  }

  @media print {
    .hb-auto-page-print {
      display: block;
      opacity: 1;
    }

    .hb-auto-page-print table tr {
      border: none;
    }

    .hb-auto-page-print table tr.tbody-title td {
      background-size: 100%;
    }

    .hb-auto-page-print table tr td {
      border-top: 1px solid #000000;
      border-left: 1px solid #000000;
      background: #ffffff;
    }

    .hb-auto-page-print table tr td:last-child {
      border-right: 1px solid #000000;
    }

    .hb-auto-page-print .cell-padding {
      padding: 0 10px;
    }

    .hb-auto-page-print table tbody ~ tbody tr.tbody-title td {
      border-top: none;
    }

    .hb-auto-page-print table tr:not(.tbody-title) td.td-border {
      border-bottom: 1px solid #000000;
    }

    .hb-auto-page-print table tbody tr td.td-border {
      border-bottom: none;
    }

    .hb-auto-page-print table tbody tr:nth-last-of-type(1) td {
      border-bottom: none;
    }
  }

</style>
