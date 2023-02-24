const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "n2r5u8x/TjWnZr4ubQeThWmZG+KbPeSh%D*G-KaPx!z%C*F-4t7w!z$CmYq3t6w9SgVkYp3saNdRgUkX",
  mongoUri: process.env.MONGO_URI || "mongodb+srv://ydballer810:2kvZsZfmnvHM2zQ@cluster0.xvvrjqc.mongodb.net/?retryWrites=true&w=majority",
  stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  stripe_test_api_key: 'YOUR_stripe_test_api_key' 
}

export default config
