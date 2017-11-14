import * as React from 'react';
import { connect } from 'react-redux';
import { returntypeof } from 'react-redux-typescript';

import { RootState } from '../store';
import { ActionCreators } from '../store/currency-converter/reducer';
import * as CurrencyRatesSelectors from '../store/currency-rates/selectors';
import { PageHeader } from '../components/header';
import { PageSection } from '../components/pagesection';
import { CurrencyConverter } from './curr-converter';

const mapStateToProps = (state: RootState) => ({
  currencies: CurrencyRatesSelectors.getCurrencies(state),
  currencyConverter: state.currencyConverter,
});

const dispatchToProps = {
  changeBaseCurrency: ActionCreators.ChangeBaseCurrency.create,
  changeTargetCurrency: ActionCreators.ChangeTargetCurrency.create,
  changeBaseValue: ActionCreators.ChangeBaseValue.create,
  changeTargetValue: ActionCreators.ChangeTargetValue.create,
};

const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;
type State = {};

class CurrencyConverterContainer extends React.Component<Props, State> {
  render() {
    const {
      baseCurrency, targetCurrency, baseValue, targetValue,
    } = this.props.currencyConverter;
    const {
      currencies, changeBaseCurrency, changeBaseValue, changeTargetCurrency, changeTargetValue,
    } = this.props;

    return (
      <article>
        <PageHeader>Currency Converter</PageHeader>

        <PageSection className="u-centered">
        
        </PageSection>

        <PageSection className="u-letter-box--xlarge">
          <CurrencyConverter currencies={currencies}
            baseCurrency={baseCurrency} targetCurrency={targetCurrency}
            baseValue={baseValue} targetValue={targetValue}
            onBaseCurrencyChange={changeBaseCurrency}
            onTargetCurrencyChange={changeTargetCurrency}
            onBaseValueChange={changeBaseValue}
            onTargetValueChange={changeTargetValue}
          />
        </PageSection>
      </article>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(CurrencyConverterContainer);
