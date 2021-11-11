import { Component, h } from '@stencil/core'

@Component({
  tag: 'my-table',
  styleUrl: 'table.scss',
  shadow: true
})

export class MyTable {


  render() {
    return (
        <div>
          <table class="classytable">
            <slot />
          </table>
        </div>
    )
  }
}
