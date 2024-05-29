// 0f505bda367c169e8844706501ba17b4
// "https://dapi.kakao.com/v3/search/book?target=title"
// --data-urlencode "query=미움받을 용기"
// -H "Authorization: KakaoAK ${REST_API_KEY}"

const input = document.querySelector('.form input')
const btn = document.getElementById('btn')
const bookContainer = document.querySelector('.book_container')

const bookName = 'hello'

function getBooks() {
    $.ajax(
        {
            type : 'GET',
            url : 'https://dapi.kakao.com/v3/search/book',
            data : {
                query : bookName,
                size : 20
            },
            headers : {
                Authorization: 'KakaoAK 0f505bda367c169e8844706501ba17b4'
            }
        }
    ).done(function(books){
        const bookItems = books.documents

        const bookItem = bookItems.map(item => {
            return `<div class="book">
                        <img src="${item.thumbnail}" alt="">
                        <h4>${item.title}</h4>
                        <p>가격 : ${item.price}</p>
                        <p>출판사 : ${item.publisher}</p>
                    </div>`
        }).join('')
        bookContainer.innerHTML = bookItem

    })
}

getBooks()

btn.addEventListener('click', function(e) {
    e.preventDefault()
    if(input.value === '') return
    bookName = input.value
    getBooks()
    input.value = ''
})