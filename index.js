// (function() {
//     interface Props {
//         id:string,
//         children:number[]
//     }
//     // 将所有的属性都设置为可选属性
//     type PartialProps=Partial<Props>
//     let p1:Props={
//         id:'',
//         children: [1]
//     }
//     let p2:PartialProps={
//         id:''
//     }
// })
// (function() {
//     // 将所有的属性声明为只读属性
//     interface Props {
//         id:string
//         children:number[]
//     }
//     type ReadonlyProps=Readonly<Props>
//     let p1:ReadonlyProps={
//         id:'12',
//         children:[1]
//     }
// })
// (function() {
//     interface Props {
//         id:string
//         name:string
//         children:number[]
//     }
//     type PickProps=Pick<Props,'id'|'name'>
//     let p2:PickProps={
//         id:'sanye',
//         name:'sanye'
//     }
// })
import axios from 'axios'
axios.get('https://api.uomg.com/api/rand.qinghua')
    .then(function (response) {
        console.log(response.status);
        console.log(response.data);
        console.log(response.config);
        console.log(response.headers);
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log('执行完了')
    })