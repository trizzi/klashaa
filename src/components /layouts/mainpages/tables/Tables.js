import React from 'react';
import styled from 'styled-components';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from 'react-table';

const Styles = styled.div`
  padding: 1rem;

  .table {
    ${''}
    display: block;
    ${''}
    overflow: auto;

    border-spacing: 0;
    border: 1px solid black;

    .thead {
      ${''}
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      ${''}
      overflow-y: scroll;
      overflow-x: hidden;
      height: 250px;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;

      ${''}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: -5px;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${''}
        touch-action:none;
      }
    }

    .th {
      &:last-of-type {
        .resizer {
          ${''}
          ${''}
          right: -15px;
        }
      }
    }
  }
`;

const headerProps = (props, { column }) =>
  getStyles(props, column.align);

const cellProps = (props, { cell }) =>
  getStyles(props, cell.column.align);

const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent:
        align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
];

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 200,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useResizeColumns,
    useFlexLayout,
    useRowSelect,
    (hooks) => {}
  );

  return (
    <div {...getTableProps()} className='table'>
      <div>
        {headerGroups.map((headerGroup) => (
          <div
            {...headerGroup.getHeaderGroupProps({
              style: { paddingRight: '15px' },
            })}
            className='tr'>
            {headerGroup.headers.map((column) => (
              <div
                {...column.getHeaderProps(headerProps)}
                className='th'>
                {column.render('Header')}
                {column.canResize && (
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${
                      column.isResizing ? 'isResizing' : ''
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div {...getTableBodyProps()} className='tbody'>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <div {...row.getRowProps()} className='tr'>
              {row.cells.map((cell) => {
                return (
                  <div
                    {...cell.getCellProps(cellProps)}
                    className='td'>
                    {cell.render('Cell')}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tables() {
  const data = [
    {
      id: 'KLA12578DHQ',
      source: 'Vel pellentesque ornare',
      date: '25th November, 2020',
      amount: '$1200',
    },
    {
      id: 'KLA12578DHQ',
      source: 'Vel pellentesque ornare',
      date: '25th November, 2020',
      amount: '$1200',
    },
    {
      id: 'KLA12578DHQ',
      source: 'Vel pellentesque ornare',
      date: '25th November, 2020',
      amount: '$1200',
    },
    {
      id: 'KLA12578DHQ',
      source: 'Vel pellentesque ornare',
      date: '25th November, 2020',
      amount: '$1200',
    },
  ];

  const columns = [
    {
      Header: 'Payout ID',
      accessor: 'payout id',
    },
    {
      Header: 'Source',
      accessor: 'source',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
  ];

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Tables;
