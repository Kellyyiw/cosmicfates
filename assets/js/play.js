let data = datas[document.getElementById("title").getAttribute("data-txt")];
let btn = document.getElementById("btn");
let load = document.getElementById("load");
let result = document.getElementById("result");
let txt;
for (const itemList in data) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.textContent = itemList;
    document.getElementsByTagName("ol")[0].appendChild(li);
}
let items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click",function(){
        for (const itm of items) {
            itm.classList.remove("active");
        }
        let x = Math.floor(Math.random()*10);
        document.getElementById("result").textContent = data[this.textContent][x];
        this.classList.add("active");
        txt = this.textContent;

        btn.addEventListener("click",function(){
            load.classList.remove("none");
            result.classList.remove("none");
            document.getElementsByTagName("ol")[0].remove();
            document.getElementById("title").textContent = txt;
            this.textContent = "再抽一次";
            this.addEventListener("click",function(){
                window.location.reload();
            })
            setTimeout(function(){
                load.remove();
            },5000)
        })
    })
}