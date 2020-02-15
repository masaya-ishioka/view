import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  items = [
    {
      title: "スッキリわかるJava入門第3版",
      price: "2860円",
      link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook",
      discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！",
      saleDate: "2019/11/01",
      publisherName: "インプレス",
      author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
    {title: "スッキリわかるJava入門第3版", price: "2860円", link: "https://hb.afl.rakuten.co.jp/hgc/g00q0727.80x1s980.g00q0727.80x1tb87/?pc=https%3A%2F%2Fbooks.rakuten.co.jp%2Frb%2F16099007%2F&m=http%3A%2F%2Fm.rakuten.co.jp%2Frms%2Fmsv%2FItem%3Fn%3D16099007%26surl%3Dbook", discription: "圧倒的人気Ｎｏ．１入門書の増補改訂版！コレクションを追加！基本文法やオブジェクト指向の「なぜ？」が必ずわかる！", saleDate: "2019/11/01", publisherName: "インプレス", author: "中山清喬/国本大悟"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
