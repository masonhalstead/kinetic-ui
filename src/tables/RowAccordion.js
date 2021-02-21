import React, {
  useState,
  useEffect,
  cloneElement,
  Children,
  useRef
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { RowElement, AccordionElement } from './elements'
import { CellWrapper, Cell } from './Cell'
import Measure from 'react-measure'
import cn from './Table.module.scss'

export const RowAccordion = ({
  theme,
  expanded,
  accordion,
  accordion_padding,
  expanded_icon,
  expand_icon,
  children,
  transition,
  settings,
  row_index,
  row,
  headers
}) => {
  const [expand, setExpand] = useState(false)
  const [direction, setDirection] = useState(false)
  const [content, setContent] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    // initial expand & content show
    if (expanded) {
      setTimeout(() => setExpand(true), transition)
      setContent(true)
      setDirection(true)
    } else {
      setExpand(false)
      setContent(false)
      setDirection(false)
    }
  }, [])

  const setAccordion = async () => {
    if (!expand) {
      // opens content and fires content useEffect
      setTimeout(() => setExpand(true), transition)
      setContent(true)
      setDirection(true)
    } else {
      // closes everything and hides content after transition is done
      setExpand(false)
      setDirection(false)
      setTimeout(() => setContent(false), transition)
      setHeight(0)
    }
  }
  const onResize = (ref) => {
    setHeight(ref.scroll.height)
  }

  const { rows_striped, row_height, row_highlight } = settings
  return (
    <RowElement
      className={cn.accordion}
      theme={theme}
      striped={rows_striped && (row_index + 2) % 2}
      highlight={row_highlight}
    >
      <div
        className={cn.cells}
        style={{ minHeight: row_height, lineHeight: `${row_height}px` }}
      >
        {Children.map(children, (child, i) => (
          <CellWrapper header={headers[i]} settings={settings} theme={theme}>
            {cloneElement(child, {
              row,
              header: headers[i],
              transition,
              row_index,
              expanded: expand,
              settings
            })}
          </CellWrapper>
        ))}
        <CellWrapper
          header={headers[headers.length - 1]}
          settings={settings}
          theme={theme}
        >
          <Cell onClick={setAccordion} align='center'>
            {direction && <FontAwesomeIcon icon={expanded_icon} />}
            {!direction && <FontAwesomeIcon icon={expand_icon} />}
          </Cell>
        </CellWrapper>
      </div>
      <AccordionElement
        className={cn.contentWrapper}
        transition={transition}
        ref={contentRef}
        theme={theme}
        expand={expand}
        style={{ maxHeight: height }}
      >
        <Measure scroll onResize={onResize}>
          {({ measureRef }) => (
            <div
              ref={measureRef}
              style={{
                borderTop: `1px solid ${theme.border_table_color}`,
                padding: content && accordion_padding
              }}
            >
              {content &&
                accordion({
                  row,
                  settings,
                  theme,
                  transition,
                  row_index,
                  headers,
                  expanded: expand
                })}
            </div>
          )}
        </Measure>
      </AccordionElement>
    </RowElement>
  )
}
RowAccordion.defaultProps = {
  theme: {},
  transition: 600,
  settings: {},
  row_index: -1,
  row: {},
  headers: [],
  expanded: false,
  accordion: () => {},
  accordion_padding: '20px',
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  children: () => {}
}
RowAccordion.propTypes = {
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expanded: PropTypes.bool,
  theme: PropTypes.object,
  transition: PropTypes.number,
  settings: PropTypes.object,
  row_index: PropTypes.number,
  row: PropTypes.object,
  accordion_padding: PropTypes.string,
  headers: PropTypes.array,
  header: PropTypes.object,
  accordion: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
