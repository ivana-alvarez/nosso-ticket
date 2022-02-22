export type CardRegional = {
    _id?: string
    bt_time?: string
    card_deposit?: string
    card_money?: string
    card_no?: string
    card_serial?: string
    card_status?: number
    card_type?: number
    cash_serial?: number
    dept_no?: number
    id_no?: string
    init_time?: string
    issue_time?: string
    last_riding_time?: string
    last_supply_time?: string
    name1?: string
    name2?: string
    opcard_no?: string
    order_no?: number
    paid?: string
    ss_times?: number
    supply_money?: string
    surname1?: string
    surname2?: string
    user?: User
}

export type User = {
    _id?: string
    _token?: string
    docCode?: string
    docNum?: string
    email?: string
    lastname?: string
    name?: string
}
