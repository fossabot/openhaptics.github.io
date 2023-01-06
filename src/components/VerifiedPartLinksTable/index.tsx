import React, { useCallback, useEffect, useMemo, type ReactNode } from 'react'
import LinkList from '../VerifiedParts/LinkList'
import verifiedParts, { type VerifiedParts, type Region } from '@site/src/verified-parts'

interface IVerifiedPartLinksTableProps<P extends VerifiedParts> {
  part: keyof P
  allParts: P
}

const VerifiedPartLinksTable = <P extends VerifiedParts = typeof verifiedParts>(props: IVerifiedPartLinksTableProps<P>) => {
  const {
    part,
    allParts = verifiedParts
  } = props

  const currentPartLinks: P[keyof P] = useMemo(
    () => allParts[part],
    [allParts, part],
  )

  return (
    <table>
      <thead>
        <tr>
          <th className='tw-text-left'>Region</th>
          <th className='tw-text-left'>Links</th>
        </tr>
      </thead>
      <tbody>
        { Object.entries(currentPartLinks).map(([region, links]) => (
          <tr>
            <td className='tw-text-left'>{region}</td>
            <td className='tw-text-left tw-align-text-top'>
              <LinkList links={links} />
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default VerifiedPartLinksTable
