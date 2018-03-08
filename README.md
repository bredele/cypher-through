# Cypher through

  [![NPM](https://img.shields.io/npm/v/cypher-through.svg)](https://www.npmjs.com/package/cypher-through)
  [![Downloads](https://img.shields.io/npm/dm/cypher-through.svg)](http://npm-stat.com/charts.html?package=cypher-through)
  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Neo4j records have many information (keys, identities, labels, field lookup, statement summary etc) that are most of the time not needed. This module only returns a record properties.

## Usage

```js
const through = require('cypher-through')
const cypher = require('cypher-async')
const query = cypher(driver)

const id = 10
query`
  MATCH (user:User)
  MATCH (user) - [:CONNECTED] -> (org:Org)
  RETURN user, {name: org.name} as company
`.then(through)
// {user: {name: 'john doe'}, company: {name: 'Apple'}}
```

Some expressions are custom and it is best to give them a column alias (such as `company` in the query above) in order to find them easily in the returned object.


## Installation

```shell
npm install cypher-through --save
```

[![NPM](https://nodei.co/npm/cypher-through.png)](https://nodei.co/npm/cypher-through/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Bluff is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any cypher-through related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
