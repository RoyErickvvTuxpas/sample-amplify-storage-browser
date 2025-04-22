import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import './App.css';

import config from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { Authenticator, Button, Flex, Heading } from '@aws-amplify/ui-react';
Amplify.configure(config);

const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});

const formFields = {
  signIn: {
    // Este objeto customiza el campo "Email"
    username: {
      label: 'Correo electrónico',               // cambia "Email"
      placeholder: 'Ingresa tu correo electrónico', // cambia "Enter your Email"
      isRequired: true,                           // vuelve a declarar si es obligatorio
      labelHidden: false,                         // muestra la etiqueta
    },
    // Este objeto customiza el campo "Password"
    password: {
      label: 'Contraseña',                        // cambia "Password"
      placeholder: 'Ingresa tu contraseña',        // cambia "Enter your Password"
      isRequired: true,
      labelHidden: false,
    },
  },
};

function App() {
  return (
    <Authenticator formFields={formFields} hideSignUp>
      {({ signOut, user }) => (
        <>
          <Flex direction="row" alignItems="center" wrap="nowrap" gap="1rem">
            <Heading level={4}>{`Hello ${user?.username}`}</Heading>
            <Button onClick={signOut}>Sign out</Button>
          </Flex>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}

export default App;
