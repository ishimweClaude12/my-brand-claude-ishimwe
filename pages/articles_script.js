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
              const title = document.createElement('h1')
              title.textContent = `${art.blog_title}`
              title.classList.add('small-title')
            //  title.classList.add('article-title')
            console.log(art);
              const article_wrapper = document.createElement('div')
              article_wrapper.append( img_element, title)
              article_wrapper.classList.add('article')
              container.append(article_wrapper)
             // Most recent article
             const recent_article_image = document.createElement('img')
             const recent_article_title = document.createElement('h1')
             const recent_article_content = document.createElement('p')

             recent_article_image.src = `${articles[0].image}`
             recent_article_title.textContent = `${articles[0].blog_title}`
             recent_article_content.textContent = `${articles[0].content}`
             recent_article_title.classList.add('article-title')
             const recent_article = document.querySelector('#recent-article');
             recent_article.replaceChildren(recent_article_image, recent_article_title, recent_article_content)
            })
 })