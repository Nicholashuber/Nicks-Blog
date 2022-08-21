<template>
  <form method="POST" action="https://submit-form.com/V99UzPDl">
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" name="name" type="text" placeholder="John Smith" />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="user" />
        </span>
      </div>
    </div>
    <!-- Email -->
    <div class="field">
      <label class="label is-medium">Email</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          name="email"
          type="email"
          id="cf-email"
          placeholder="you@email.com"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="envelope" />
        </span>
      </div>
    </div>
    <!-- Subject -->
    <div class="field">
      <label class="label is-medium">Subject</label>
      <div class="control has-icons-left">
        <input
          class="input is-medium"
          type="text"
          placeholder="Brief Summary"
        />
        <span class="icon is-small is-left">
          <font-awesome-icon icon="briefcase" />
        </span>
      </div>
    </div>
    <!-- Message -->
    <div class="field">
      <label class="label is-medium">Message</label>
      <div class="control">
        <textarea
          class="textarea"
          name="message"
          placeholder="Detailed description of your comment, request, etc"
          rows="8"
        ></textarea>
      </div>
    </div>
    
        <!-- Verify -->
    <div class="field">
      <label class="label is-medium">Verify</label>
      <div class="control">
        <div class="g-recaptcha" data-sitekey="6LfSLJUhAAAAAMajJdjZgqc6aQh-8zYHdL18tJE8"></div>
      </div>
    </div>
    
    
    <div class="control">
      <button id="cf-submit" type="submit" class="button is-primary">
        Contact Us
      </button>
    </div>
  </form>
</template>
