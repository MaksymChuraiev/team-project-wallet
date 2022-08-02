import {
	BalanceWrapper,
	BalanceLabel,
	BalanceSumm,
} from './Balance.styled'

export const Balance = () => {

	const balance = 24000.00

	return (
		<BalanceWrapper>
			<BalanceLabel>Your balance</BalanceLabel>
			<BalanceSumm>&#8372;{balance}</BalanceSumm>
		</BalanceWrapper>
	)
}