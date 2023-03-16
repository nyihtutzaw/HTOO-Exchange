import React, { useEffect, useCallback, useState } from 'react'
import {
  MenuItem,
  Select,
  FormHelperText,
  TextField,
  TextareaAutosize,
} from '@mui/material'
import TableRow from '@material-ui/core/TableRow'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import * as ExchangeService from './../../services/exchangeService'
import TableCell from '@material-ui/core/TableCell'
import usePermission from '../../hooks/usePermission'

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded'

const ExchangeTableEdit = ({ data, index, handleDelete }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const banks = useSelector((state) => state.bank.banks)
  const customers = useSelector((state) => state.customer.customers)
  const { permitDelete, permitUpdate } = usePermission('exchange')

  const navigate = useNavigate()
  const schema = yup.object().shape({
    fromBankAccountId: yup.string().required(),
    toBankAccountId: yup.string().required(),
    customer_id: yup.string().required(),
    to_transfer_amount: yup.string().required(),
    e_money_comission: yup.string().required(),
    cash_comission: yup.string().required(),
    from_transfer_amount: yup.string().required(),
  })

  const {
    register,
    control,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    reset({
      fromBankAccountId: data?.fromBankAccountId,
      toBankAccountId: data?.toBankAccountId,
      from_transfer_amount: data?.from_transfer_amount,
      to_transfer_amount: data?.to_transfer_amount,
      customer_id: data?.customer_id,
      e_money_comission: data?.e_money_comission,
      cash_comission: data?.cash_comission,
      remark: data?.remark,
    })
  }, [reset, data])

  const handleSubmit = useCallback(
    async (values) => {
      setLoading(true)
      if (data) {
        await ExchangeService.update(values, data?.id)
      }
      setLoading(false)
      return
    },
    [data],
  )

  return (
    <TableRow
      onDoubleClick={() => {
        navigate('/admin/exchange-invoice/' + data.id)
      }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell align="center">
        {dayjs(data.createdAt).format('DD/MM/YYYY HH:mm')}
      </TableCell>
      <TableCell align="center">
        <Controller
          name="fromBankAccountId"
          id="fromBankAccountId"
          control={control}
          render={({ field }) => (
            <Select
              fullWidth
              label={t('branch-bank-out')}
              labelId="fromBankAccountId-label"
              {...field}
            >
              {banks.map((bankAccount) => (
                <MenuItem value={bankAccount.id}>
                  {bankAccount.name} ({bankAccount.amount})
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText error={true}>
          {errors.fromBankAccountId?.message}
        </FormHelperText>
      </TableCell>
      <TableCell align="center">
        <Controller
          name="toBankAccountId"
          id="toBankAccountId"
          control={control}
          render={({ field }) => (
            <Select
              fullWidth
              label={t('branch-bank-out')}
              labelId="toBankAccountId-label"
              {...field}
            >
              {banks.map((bankAccount) => (
                <MenuItem value={bankAccount.id}>
                  {bankAccount.name} ({bankAccount.amount})
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText error={true}>
          {errors.toBankAccountId?.message}
        </FormHelperText>
      </TableCell>
      <TableCell align="center">
        <TextField
          type="text"
          label={t('amount-money-in')}
          variant="outlined"
          size="small"
          {...register('to_transfer_amount')}
          error={errors.to_transfer_amount?.message}
          helperText={errors.to_transfer_amount?.message}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          type="text"
          label={t('amount-money-out')}
          variant="outlined"
          size="small"
          {...register('from_transfer_amount')}
          error={errors.from_transfer_amount?.message}
          helperText={errors.from_transfer_amount?.message}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          type="text"
          label={t('e-comission')}
          variant="outlined"
          size="small"
          {...register('e_money_comission')}
          error={errors.e_money_comission?.message}
          helperText={errors.e_money_comission?.message}
        />
      </TableCell>
      <TableCell align="center">
        <TextField
          type="text"
          label={t('cash-comission')}
          variant="outlined"
          size="small"
          {...register('cash_comission')}
          error={errors.cash_comission?.message}
          helperText={errors.cash_comission?.message}
        />
      </TableCell>
      <TableCell align="center">
        <TextareaAutosize
          placeholder="remark"
          {...register('remark')}
          error={errors.remark?.message}
          helperText={errors.remark?.message}
          minRows={3}
          cols={10}
          type="text"
          label={t('about')}
          variant="outlined"
          size="small"
          sx={{ width: '350px' }}
        />
      </TableCell>
      <TableCell align="center">
        <Controller
          name="customer_id"
          id="customer_id"
          control={control}
          render={({ field }) => (
            <Select fullWidth {...field}>
              {customers.map((customer) => (
                <MenuItem value={customer.id}>{customer.name}</MenuItem>
              ))}
            </Select>
          )}
        />
        <FormHelperText error={true}>
          {errors.customer_id?.message}
        </FormHelperText>
      </TableCell>
      <TableCell align="center">{data.user?.name}</TableCell>
      <TableCell align="center">
        {permitUpdate &&
          (loading ? (
            'Loading...'
          ) : (
            <DriveFileRenameOutlineRoundedIcon
              onClick={formHandleSubmit(handleSubmit)}
              sx={{ color: '#36353d', fontSize: '25px' }}
            />
          ))}
        {permitDelete && (
          <DeleteForeverRoundedIcon
            onClick={() => handleDelete(data)}
            sx={{
              color: 'red',
              fontSize: '25px',
              marginLeft: '10px',
            }}
          />
        )}
      </TableCell>
    </TableRow>
  )
}

export default ExchangeTableEdit
