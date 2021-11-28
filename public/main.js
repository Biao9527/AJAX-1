let n = 1
console.log('我是 main.js ')
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get' , `/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item =>{
                const li = document.createElement('li')
                li.innerHTML = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}
getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get','/5.json')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}
getXml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get' , '/4.xml')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
getHtml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get' , '/3.html')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <=300) {
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)        
            } else {
                alert('html 加载失败')
            }
        }
    }
    request.send()
}
getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get' , '/2.js')
    request.onreadystatechange = ()=>{
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 300) {
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            } else {
                alert('js 加载失败')
            }
        }
    }
    request.send()
}

getCss.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('get' , '/style.css')
    request.onreadystatechange = ()=>{
       if (request.readyState === 4) {
           if (request.status >= 200 && request.status <= 300) {
               console.log(request.response)
               //创建 style 标签
               const style = document.createElement('style')
               //填写 style 内容
               style.innerHTML = request.response
               //插入到 head 中
               document.head.appendChild(style)
           } else {
               alert('css 加载失败')
           }
       }
    }
    request.send()
}