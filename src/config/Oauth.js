import OAuthManager from 'react-native-oauth'

const config =  {
  facebook: {
    client_id: '711650962332522',
    client_secret: '24106a73ed7f5fe271b004e2162e3627'
  },
  google: {
    callback_url: 'com.googleusercontent.apps.238276560020-ovjv8knus1cj2vqq9u1psmtf794d380m:/google',
    client_id: '238276560020-ovjv8knus1cj2vqq9u1psmtf794d380m.apps.googleusercontent.com'
  }
}

const oauth = new OAuthManager('timekeeper')
oauth.configure(config)

export default oauth
