import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from 'components/card'

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;

  margin-bottom: 10rem;
`

const ListCard = ({ data }) => (
  <Container>
    {data.map(({ dialect, meanings, examples  }) => (
      <Card key={dialect} size="small">{dialect}</Card>
    ))}
  </Container>
)

ListCard.propTypes = {
  data: PropTypes.array.isRequired
}

export default ListCard
