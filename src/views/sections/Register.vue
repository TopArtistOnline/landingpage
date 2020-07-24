<style scoped>
  .background{
    height: 100%;
    width: 100%;
    background-image: linear-gradient(0deg, rgba(0,130,147,1) 0%, rgba(255,255,255,0) 50%);
  }
  .form{
    background-image: url('../../assets/elements/friends-surfing.png');
    background-position: bottom;
    background-size: cover;
    border-radius: 1em !important;
  }
  .form2{
     background-image: url('../../assets/elements/man-in-headphones.png') !important;
     background-position: left bottom;
     background-size: contain;
     margin-left: -3.5em;
  }

  .transparent{
    background-color: transparent!important;
    border-color: transparent!important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }
.form-input >>> .error--text {
  color: rgba(255, 255, 255, 1) !important;
  font-weight: bolder;
}
.form-input >>> .error--text.v-icon{
  color: #ff5252 !important;
}
.v-text-field{
  margin-left: 4em;
}
.v-facebook-login{
  width: 100% !important;
  max-height: 3em;
  font-size: 0.9em !important;
}
.google-signin-button {
      display: flex;
      width:100% !important;
      background: white !important;
      border-radius: 3px !important;
      box-shadow: 1px 1px 1px grey !important;
      white-space: normal !important;
      overflow-wrap: break-word;
      word-wrap: break-word !important;
      padding: 0em 5em 0em 5em !important;
      box-sizing: inherit;
      -webkit-box-pack: center;
      writing-mode: horizontal-tb !important;
      text-rendering: auto;
}
.google-signin-button .icon_google {
      max-height: 1.5em !important;
      max-width: 1.5em !important;
}
.google-signin-button span {
      color: #444 !important;
      font-size: 0.9em !important;
      text-transform: none;
      letter-spacing: normal;
      padding-left: 0.4em;
}
.link{
  color:#00FFFF;
  text-transform: none;
  margin-left: -0.8em;
  margin-right:-0.5em;
}
</style>

<template>
  <section
    id="theme-features"
    class="background"
  >
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
        >
          <v-container>
            <v-card class="transparent form">
              <v-card class="transparent form2">
                <v-card-text>
                  <v-form class="transparent">
                    <v-row
                      align="center"
                      justify="center"
                    >
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-row
                          style="margin-left:6em"
                        >
                          <span
                            class="white--text text-h3"
                            style="text-align:justify;line-height : 20px;"
                          ><span style="font-size:59%">It's time to start on the road of becoming a</span> <span style="font-size:59%; font-weight:800">Top Artist Online.</span> </span>
                        </v-row>
                        <v-row
                          align="right"
                          justify="right"
                          style="margin-left:6em"
                        >
                          <span
                            class="white--text text-h3"
                            style="text-align:right; font-size:100% !important; line-height : 20px; padding-top:1em; padding-bottom:3em"
                          > With a TAO account you can find your top artist, improve your skills, share your knowledge and enjoy the journey to become the best version of you.</span>
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:2em"
                        >
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-inner-icon="mdi-email"
                            solo
                            type="text"
                            background-color="white"
                          />
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:2em"
                        >
                          <v-text-field
                            label="Password"
                            name="password"
                            class="form-input"
                            prepend-inner-icon="mdi-lock"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            solo
                            background-color="white"
                            @click:append="show1 = !show1"
                          />
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:2em"
                        >
                          <v-text-field
                            label="Confirm password"
                            name="confirmpassword"
                            class="form-input"
                            prepend-inner-icon="mdi-lock"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show2 ? 'text' : 'password'"
                            solo
                            background-color="white"
                            @click:append="show2 = !show2"
                          />
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:5.7em; margin-right:-1.8em; margin-bottom:1em; display:flex"
                        >
                          <v-col
                            cols="12"
                            sm="12"
                            md="6"
                          >
                            <v-btn
                              v-google-signin-button="clientId"
                              class="google-signin-button"
                            >
                              <v-img
                                class="icon_google"
                                src="../../assets/logos/Google__G__Logo.svg"
                              /><span>Continue with Google</span>
                            </v-btn>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="12"
                            md="6"
                          >
                            <v-facebook-login app-id="966242223397117" />
                          </v-col>
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:6em"
                        >
                          <v-card-actions>
                            <v-btn
                              color="#007e69"
                              class="text-h5 white--text"
                              style="padding:0.6em 2.5em 0.6em 2.5em; border-radius:0.5em; border: 2px solid white !important; text-transform: capitalize;-webkit-box-shadow: 5px 5px 15px 2px rgba(0,0,0,0.5);box-shadow: 5px 5px 15px 2px rgba(0,0,0,0.5);"
                            >
                              Next
                            </v-btn>
                          </v-card-actions>
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:6em"
                        >
                          <span
                            class="white--text text-h3"
                            style="text-align:center;line-height : 10px;"
                          ><span style="font-size:30%">By clicking next, you agree to our
                            <v-btn
                              class="link"
                              text
                              small
                              to=""
                            >Terms</v-btn>and that you have read our
                            <v-btn
                              class="link"
                              text
                              small
                              to=""
                            >Privacy Policy</v-btn>and
                            <v-btn
                              class="link"
                              text
                              small
                              to=""
                            >Content Policy</v-btn>
                          </span> </span>
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:6em"
                        >
                          <span
                            class="white--text text-h3"
                            style="text-align:center; font-size:180% !important;font-weight:700"
                          >YOU ARE NOW IN THE COMMUNITY!</span>
                        </v-row>
                        <v-row
                          align="center"
                          justify="center"
                          style="margin-left:6em"
                        >
                          <span
                            class="white--text text-h3"
                            style="text-align:center; font-size:100% !important;"
                          >Already have an account?
                            <v-btn
                              class="link"
                              text
                              small
                              to=""
                            >Log In </v-btn></span>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  import VFacebookLogin from 'vue-facebook-login-component'
  import GoogleSignInButton from 'vue-google-signin-button-directive'
  export default {
    name: 'SectionThemeFeatures',
    components: {
      VFacebookLogin,
    },
    directives: {
      GoogleSignInButton,
    },

    data () {
      return {
        show1: false,
        show2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        clientId: 'Your_Google_Client-Id',
      }
    },
    methods: {
      OnGoogleAuthSuccess (idToken) {
      // Receive the idToken and make your magic with the backend
      },
      OnGoogleAuthFail (error) {
        console.log(error)
      },
    },
  }
</script>
