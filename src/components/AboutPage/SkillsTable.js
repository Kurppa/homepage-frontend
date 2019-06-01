import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const SkillsTable = () => {

  return (
    <React.Fragment>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center' colSpan={2}>Languages</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Javascript</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>C++</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Python</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Java</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='yellow' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center' colSpan={2}>Technologies &amp; Other</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Sql</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>MongoDB</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>React</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Node</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Docker</Table.Cell>
            <Table.Cell textAlign='center'>
              <Icon color='green' name='checkmark' size='large' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </React.Fragment>
  )

}

export default SkillsTable