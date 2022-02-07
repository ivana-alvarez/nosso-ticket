// material-ui
import { makeStyles } from '@material-ui/styles'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'

// project imports

// style constant
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

// table data

const rows = [
    {
        card_no: '1001020002985176',
        card_serial: 'AF34ABCD',
        action_code: 'TRA',
        action_type: 'ENT',
        moment: '2022-02-02T15:34:16',
        company_code: '1008020200002',
        node_code: '1008020200002',
        node_type: '200',
        line: '03',
        paid: '4.0',
        paid_iso_code: '937',
    },
    {
        card_no: '1001020002985176',
        card_serial: 'AF34ABCD',
        action_code: 'TRA',
        action_type: 'ENT',
        moment: '2022-02-02T15:34:16',
        company_code: '1008020200002',
        node_code: '1008020200002',
        node_type: '200',
        line: '03',
        paid: '4.0',
        paid_iso_code: '937',
    },
    {
        card_no: '1001020002985176',
        card_serial: 'AF34ABCD',
        action_code: 'TRA',
        action_type: 'ENT',
        moment: '2022-02-02T15:34:16',
        company_code: '1008020200002',
        node_code: '1008020200002',
        node_type: '200',
        line: '03',
        paid: '4.0',
        paid_iso_code: '937',
    },
]

// ==============================|| TABLE - DENSE ||============================== //

export default function DenseTable() {
    const classes = useStyles()

    return (
        <>
            <TableContainer>
                <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>Estación</TableCell>
                            <TableCell align="right">Fecha</TableCell>
                            <TableCell align="right">Operador</TableCell>
                            <TableCell align="right">Monto</TableCell>
                            <TableCell sx={{ pr: 3 }} align="right">
                                Balance
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover key={row.card_no}>
                                <TableCell
                                    sx={{ pl: 3 }}
                                    component="th"
                                    scope="row"
                                >
                                    {row.company_code}
                                </TableCell>
                                <TableCell align="right">
                                    {row.moment}
                                </TableCell>
                                <TableCell align="right">
                                    {row.node_code}
                                </TableCell>
                                <TableCell align="right">{row.paid}</TableCell>
                                <TableCell sx={{ pr: 3 }} align="right">
                                    {row.card_serial}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
