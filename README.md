# @mydefi/ui

> UI components originally created for the MyDeFi app.

[![NPM](https://img.shields.io/npm/v/@mydefi/ui.svg)](https://www.npmjs.com/package/@mydefi/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview
mydefiUI is a React Library used to build the user interface of the [MyDeFi](https://mydefi.org) app. We decided to open-source it to let anyone benefit from it and potentially build applications that could be integrated in MyDeFi.

## Install

```bash
npm install --save @mydefi/ui
```

## Usage

```jsx
import React, { Component } from 'react'

import { Main, Card } from '@mydefi/ui'

class Example extends Component {
  render () {
    return (
      <Main>
        <Card title="This is a test card" description="And more details about it."></Card>
      </Main>
    )
  }
}
```

## Components

### Main
Encapsulate your app in the Main component to ensure a correct display of all of our components.
```jsx
import { Main } from '@mydefi/ui'

<Main>
  {/* Your app here */}
</Main>
```

### Card
The Card component can be used as a container for some specific data.
```jsx
import { Card } from '@mydefi/ui'

<Card title="Title of the card" description="This is the card description.">
  {/* Add content here */}
</Card>
```
#### Properties
* **title:** Will automatically display a formatted title for the app.
* **description:** Will automatically display a formatted description for the app.

The apparence of the title and description properties can be customised by using a `<Text>` component instead of a simple string.

## License

MIT © [Baptiste Greve](https://github.com/baptistegreve)
