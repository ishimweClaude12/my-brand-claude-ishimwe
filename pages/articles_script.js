const articles = []
for(let i = 0; i <= 100 ; i ++){
    if(localStorage.getItem(i)) articles.push(JSON.parse(localStorage.getItem(i)))
}

const dummy = document.getElementById('log')
const container = document.getElementById('container')
 window.addEventListener('load',(e) => {
    articles.forEach(art => {
              const img_element = document.createElement('img')
              const paragraph_element = document.createElement('p');
              paragraph_element.textContent = `${art.paragraphs}`
              img_element.src = `${art.image}`
              img_element.alt = 'blog image'
              img_element.classList.add('blog-image')
              const title = document.createElement('h1').textContent = `Title: ${art.blog_title}`
            //  title.classList.add('article-title')
            console.log(art);
              const article_wrapper = document.createElement('div')
              article_wrapper.append( img_element, title)
              article_wrapper.classList.add('article')
              container.append(article_wrapper)
             // container.classList.add('blg-cnt')
            })
 })