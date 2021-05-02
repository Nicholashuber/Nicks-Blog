<template>
  <form>
    <!-- Name -->
    <div class="field">
      <label class="label is-medium">Name</label>
      <div class="control has-icons-left">
        <input class="input is-medium" type="text" placeholder="John Smith" />
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
          id="cf-message"
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
          placeholder="Detailed description of your comment, request, etc"
          rows="8"
        ></textarea>
      </div>
    </div>
    <div class="control">
      <button id="cf-submit" class="button is-primary">
        Contact Us
      </button>
    </div>
  </form>
  <script type="text/javascript">
       $(document).ready(function(){
   $("#cf-submit").click(function(e) {
                e.preventDefault();

                var name = $("#cf-name").val();
                var phone = $("#cf-email").val();
                var message = $("#cf-message").val();

        $.ajax({type: "POST", url: 'https://96yx281j77.execute-api.us-east-2.amazonaws.com/Prod', contentType: 'application/json', data: JSON.stringify({
                        'name': name,
                        'phone': phone,
                        'message': message
                    }), success: function(result){
            $('#form-response').text('Thank you! I will reach out to you soon!');
        },
 error: function(){
                        $('#form-response').text('Error.');
                    }
});
    });
});
    </script>
</template>
