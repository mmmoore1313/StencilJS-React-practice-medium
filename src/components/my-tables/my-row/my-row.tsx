import { Component, h } from '@stencil/core'

@Component({
  tag: 'perfect-row',
  styleUrl: 'row.scss',
  shadow: true
})

export class PerfectRow {
  render() {
    return (
      <div>
        <tr class='perfectrow'>
          <slot />
        </tr>
      </div>
    )
  }
}
