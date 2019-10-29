# @mydefi/ui

> UI components originally created for the MyDeFi app.

[![NPM](https://img.shields.io/npm/v/@mydefi/ui.svg)](https://www.npmjs.com/package/@mydefi/ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview
mydefiUI is a React Library used to build the user interface of the [MyDeFi](https://mydefi.org) app. We decided to open-source it to let anyone benefit from it and potentially build applications that could be integrated in MyDeFi.
Learn how to use it with [https://ui.mydefi.org[(ui.mydefi.org).

## Install

```bash
npm install --save @mydefi/ui
```

## Example Usage

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

## Components & Documentation

We created a small website to help you learn how to use the mydefiUI. It's located at [https://ui.mydefi.org[(ui.mydefi.org).


## License

MIT © [Baptiste Greve](https://github.com/baptistegreve)
