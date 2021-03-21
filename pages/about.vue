<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <!--<site-hero
      title="About Me"
      subtitle="Lavasocks"
      image="/uploads/about-hero.jpg"
    ></site-hero>-->
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Hello there, my name is Nick Huber.</h3>
          <p>
            <strong>
              
            </strong>
          </p>
          <p>
            
I am a 5x Certified Salesforce Developer who utilizes the Salesforce platform's Full-Stack of technologies as well as Node.js, Twilio, Web API's, Stripe, Angular, Heroku, SQL, Wordpress, Chrome Extensions, Andriod, HTML5, and PHP to develop outstanding applications which improved day to day business for over 100+ clients now.

Having understood many modern design patterns and Full-Stack technologies I am skilled in
 spearheading any task while incorporating user and business requirements into cost-effective,
  secure and user-friendly solutions.
<br>
  Thanks to many online resources detailing advanced Salesforce topics my career flourished.
Every time I successfully research and solve a complex issue or create something new for companies
 I cant help but feel a warm and fuzzy feeling inside. To show my appreciation I am logging and sharing
  examples, tricks, and solutions for other developers to also reach new heights aswell.
          </p>
          <div class="signature mt-20">
                                    <img src="https://huber.dev/img/signature-white.png" alt="">
                                </div>
          <p>
<img class=" wp-image-254 alignleft" src="https://huber.dev/img/sf-plat.png" alt="" width="272" height="156" style="
    width: 176px;
    padding: 10px;
">


<img class=" wp-image-254 alignleft" src="https://huber.dev/img/deploymentlifecycle.jpg" alt="" width="272" height="156" style="
    width: 176px;
    padding: 10px;
">


<img class="size-full wp-image-256 alignleft" src="https://huber.dev/img/sf-admin.png" alt="" width="276" height="157" style="
    width: 176px;
    padding: 10px;
"><img class="wp-image-255 alignleft" src="https://huber.dev/img/sf-builder.jpg" alt="" width="273" height="156" style="
    width: 176px;
    padding: 10px;
"><img class=" wp-image-254 alignleft" src="https://huber.dev/img/sf-service.jpg" alt="" width="272" height="156" style="
    width: 176px;
    padding: 10px;
">
</p>

          <!--<h3>Another Fake Heading</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            eligendi impedit inventore ipsa laboriosam libero magnam modi odio,
            sunt temporibus. Distinctio doloremque eum magni nostrum quasi
            ratione rem repudiandae sit!
          </p>-->
          <!--<quote-card />-->
         <!--<h3>Still More Fake Content</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            eligendi impedit inventore ipsa laboriosam libero magnam modi odio,
            sunt temporibus. Distinctio doloremque eum magni nostrum quasi
            ratione rem repudiandae sit! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
            <strong>Alias aut facere harum ipsam</strong> quibusdam quidem
            quisquam saepe? Alias architecto blanditiis consequatur consequuntur
            dicta ipsa iste modi provident, quod, similique veritatis.
          </p>-->
        </div>

        <!--<div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
        </div>-->
      </template>

      <template v-slot:sidebar>
      <div class="about-info">
                                    <h3 class="mb-20" style="    font-size: 22px;
    font-weight: 700;">Personal Information</h3>
                                    <ul>
                                        <li><span class="title2">Name</span><span class="value">Nick Huber</span></li>
                                        <li><span class="title2">Age</span><span class="value">26 Years</span></li>
                                        
                                        
                                        <li><span class="title2">Email</span><span class="value">Nick@Huber.codes</span></li>
                                        
                                        <li><span class="title2">Freelance / Consulting</span><span class="value">Available</span></li>
                                    </ul>

<style>
.header-main .image-container .header-name:before {
    background-color: black;
}
.page-heading h2 {
    color: #00A1E1;
}
.title2{
   font-size: 16px;
    font-weight: 700;
    letter-spacing: .5px;
    border-bottom: 2px solid #ffffff;
    position: relative;
    display: inline-block;
    margin-right: 15px;
    padding-bottom: 1px;
    color: #ffffff;
}
</style>

                                </div>
      <img src="https://i.gyazo.com/f471cff490a2a67acc1838d62d863d45.png" style="width: 100%;"/>
      <img src="https://i.gyazo.com/dc874a0dba5eaa68bfb5ee29aefd2196.png" style="width: 100%;"/>
      <center>
<img src="https://i.imgur.com/Sk0xRxn.png" style="
        max-width: 200px;
    text-align: center;
">
</center>
        <!--<h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />-->
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
