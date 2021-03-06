# Dwolla Send Money Starter-kit

This repo contains a Dwolla starter-kit app illustrating the [send flow](https://developers.dwolla.com/guides/send-money#send-money-to-your-users), where a Client (business) sends money to its Customers. This project was built using [Next.js](https://nextjs.org/), [React](https://reactjs.org/) and [Auth0](https://auth0.com/).

![send-flow](/app/images/funds_flow_send.gif)

## Getting Started

### Setup

- Clone the repository and run `npm install` or `yarn`
- Create a free Auth0 account
- Rename `.env.local.example` file to `.env.local`
- Ensure the variables in `.env.local` file are set up correctly

`.env.local.example`

```bash
# Auth0 (find this information in your Auth0 dashboard - https://manage.auth0.com/dashboard)
AUTH0_SECRET="LONG_RANDOM_VALUE"
AUTH0_BASE_URL="http://localhost:3000"
AUTH0_ISSUER_BASE_URL="https://YOUR_AUTH0_DOMAIN.auth0.com"
AUTH0_CLIENT_ID="YOUR_AUTH0_CLIENT_ID"
AUTH0_CLIENT_SECRET="YOUR_AUTH0_CLIENT_SECRET"

# Dwolla (navigate to your Sandbox Dashboard to find your Key and Secret - https://accounts-sandbox.dwolla.com)
DWOLLA_APP_KEY="YOUR_DWOLLA_APP_KEY"
DWOLLA_APP_SECRET="YOUR_DWOLLA_APP_SECRET"
DWOLLA_APP_ENV="sandbox"

# This is the email you used to sign up for a Sandbox account.
ADMIN_EMAIL="YOUR_DWOLLA_ACCOUNT_EMAIL"
```

### Creating the Auth0 Application

1. After creating an [Auth0](https://auth0.com/) account, choose the application type "Regular Web Applications" (Traditional web app using redirects) when creating an application.

2. Select `Next.js` for type of technology

3. Under the settings tab of your newly created application, copy/paste `http://localhost:3000/api/auth/callback` for "Allowed Callback URLs"

4. Copy/Paste `http://localhost:3000/` for "Allowed Logout URLs"

5. Copy/Paste `http://localhost:3000/` for "Allowed Web Origins"

### Developing + Running the project

Run tests

```bash
npm run checks
# or
yarn checks
```

Run the project

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use it

Once you have the app set up and running, you will see a login page. Clicking on the Login/Signup button will trigger the [Auth0](https://auth0.com/) flow for login and authentication.

![auth0-login-scree](/app/images/auth0-login.png)

You can either login as the `Admin` of the app or a `User`.

### Admin login

- If you login using your Sandbox email address, you are taken to the `Admin` dashboard where you can view a list of your Customers. You can send funds to these Customers by clicking on the `Send Money` button.

![admin-dashboard](/app/images/admin-view.png)
![admin-send-money-modal](/app/images/send-money-modal.png)

- You can navigate to the Settings page to view your Account information.

![admin-settings](/app/images/account-information.png)

### User login

- If you login using an email other than your Sandbox account email, then you are taken to the `Customer` Dashboard where you can create your payment profile. This step will create a `Recieve-Only` Dwolla Customer account associated with that email.

![create-payment-profile](/app/images/create-payment-profile.png)

- Once your profile is created, you are taken to the Dashboard view where you are able to view a list all payments made to you by the `Admin`.

![user-dashboard](/app/images/user-dashboard.png)

- Navigate to the Settings page to view your Account information and add or remove a bank.

![add-remove-bank](/app/images/add-remove-bank.png)

## Where to find the docs

Visit our [Guide](https://developers.dwolla.com/guides) or API [docs](https://docs.dwolla.com/) for more additional information.

## Support

Support queries can be directed to our [Developer Forum](https://discuss.dwolla.com/).

## Contributing and Reporting Bugs

Feel free to fork this repo and submit PRs for any corrections, new features, etc. you think we should include!
