# Demo

Aqui serão postados apenas os projetos desenvolvidos como prova de conceito - POC.


css exemplo

.content {
    background-color: #eee;
    background-image: linear-gradient(45deg, #16acdc, #59caee);
    background-repeat:no-repeat;
    background-size:100% 20%;
}
.grid {
    background: #fff;
    border-radius: 10px;
    padding:20px 15px;
}
.header-md:after {
    background: none;
}
h1 {
    font-size: 1.5em;
    margin-bottom: 5px !important;
}
.item-md, .item-inner {
    padding: 0 !important;
    margin: 0 !important;
}
.text-input-md {
    border:1px solid #ddd;
    border-radius: 100px;
    padding: 25px 25px 10px 25px;
    font-weight: bold;
}
.item-select {
    border:1px solid #ddd;
    border-radius: 100px;
    padding: 15px;
    margin-bottom: 5px !important;
}
.item-label-stacked .text-input-md, .item-label-floating .text-input-md {
    margin-top: 0;
    width: calc(100%);
}
.item-md.item-block .item-inner {
    border-color:#fff;
}
.label-md {
    margin:0;
    padding-left: 30px;
}
.label-md[stacked], .label-md[floating] {
    margin-left: 0;
}
.label-md[floating] {
    -webkit-transform: translate3d(0, 27px, 0);
    transform: translate3d(0, 45px, 0);
}

.label-md[floating] {

    transform-origin: left 138px;
}

.input-has-focus {
    border-color:#59caee;
}
.button-outline-md{
    border-color:#fff;
    font-size: 2rem;
    margin: 26px 20px;
}
.button {
    text-transform: none;
}
.button-full.button-outline {
   border-radius: 100px;
    background: #fff;
    border-color: #fff;
}
.button-md {
   box-shadow:none;
}
.button-outline-md {
   margin:10px 20px 0 0;
}
.button-default {
   background-image: linear-gradient(45deg, #16acdc, #59caee);
    background-repeat:no-repeat;
}
ion-header {
    .toolbar-background-md {
        background: transparent;
   }
    .toolbar-title-md {
        color: #fff;
        padding: 30px 0 0 20px;
   }
    .button-md {
        margin-top:24px;
   }
}
