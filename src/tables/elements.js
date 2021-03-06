import styled from '@emotion/styled'

export const HeadersElement = styled.div(({ theme, borders }) => ({
  borderTop: `1px solid ${theme.border_table_color}`,
  borderBottom: `1px solid ${theme.border_table_color}`,
  borderLeft: `1px solid ${theme.border_table_color}`,
  borderRight: !borders && `1px solid ${theme.border_table_color}`
}))
export const HeaderElement = styled.div(({ theme, borders }) => ({
  background: theme.background_header,
  borderRight: borders && `1px solid ${theme.border_table_color}`,
  fontSize: theme.font_header_size,
  textTransform: theme.font_header_transform,
  fontFamily: theme.font_header_family,
  fontWeight: theme.font_header_weight,
  color: theme.font_header_color
}))
export const ContentElement = styled.div(({ theme, sort_direction }) => ({
  '&:hover': {
    color: sort_direction && theme.font_header_hover
  }
}))
export const RowsElement = styled.div(({ theme, borders }) => ({
  borderLeft: `1px solid ${theme.border_table_color}`,
  borderRight: !borders && `1px solid ${theme.border_table_color}`,
  '& > div:last-child': {
    borderBottom: `1px solid ${theme.border_table_color}`
  }
}))
export const RowElement = styled.div(
  ({ striped, sticky, fill, highlight, theme }) => {
    let background = theme.background_row || '#fff'

    if (striped) {
      background = theme.background_row_striped
    }
    if (sticky && fill) {
      background = theme.background_row || '#fff'
    }

    return {
      borderTop: `1px solid ${theme.border_table_color}`,
      position: sticky ? 'sticky' : undefined,
      '& > div': {
        background
      },
      '&:hover > div': {
        background: highlight ? theme.background_row_hover : undefined
      }
    }
  }
)
export const AccordionElement = styled.div(({ theme, transition, expand }) => ({
  overflow: !expand ? 'auto' : 'visible',
  transition: `max-height ${transition}ms ease`,
  borderRight: `1px solid ${theme.border_table_color}`
}))
export const CellElement = styled.div(({ theme, borders }) => ({
  borderRight: borders && `1px solid ${theme.border_table_color}`
}))
export const AccordionCellElement = styled.div(({ theme }) => ({
  color: theme.icon_table_color,
  '&:hover': {
    color: theme.icon_table_hover
  }
}))
export const AccordionContentElement = styled.div(({ theme, expand }) => ({
  overflow: 'auto',
  borderLeft: theme.border_accordion,
  borderRight: theme.border_accordion
}))
