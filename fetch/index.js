const div=document.getElementById("cate")
const btn=document.getElementById("btn")
fetch('https://northwind.vercel.app/api/products')
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const p = document.createElement('p')
        p.textContent = `${item.name}`
        div.appendChild(p)
    })
})

// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/products', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name:sevinc.value
//            }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data gonderildi" + data);
//           });
// })

function FetchDel() {
        let url = `https://northwind.vercel.app/api/products/102`;

        fetch(url, {
          method: "DELETE",
        }).then((res) => console.log(res));
      }

btn.addEventListener('click', FetchDel)




