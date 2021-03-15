<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="About Me"
      subtitle="Lavasocks"
      image="/uploads/about-hero.jpg"
    ></site-hero>
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
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
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
