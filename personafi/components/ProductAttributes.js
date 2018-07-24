import {Header, Divider, Table, Icon} from 'semantic-ui-react'

export default ({
  description,
  s3_url
}) => (
  <React.Fragment>
    <Header as='h3'>About this personality</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>Personality Sample</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
           <Table.Cell><audio target='blank' controls src={s3_url}>link to file</audio></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)