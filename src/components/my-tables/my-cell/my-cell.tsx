import { Component, h } from '@stencil/core'

@Component({
  tag: 'perfect-cell',
  styleUrl: 'cell.scss',
  shadow: true
})

export class PerfectCell {
  render() {
    return (
      <div>
        <td class='perfectcell'>
          <slot />
        </td>
      </div>
    )
  }
}
