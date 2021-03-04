import React from 'react';
import Field from 'src/components/Field';
import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import './style.scss';

const Signup = ({
  changeField,
  email,
  password,
  confirm,
  firstname,
  lastname,
  phoneNumber,
  number,
  streetName,
  zipcode,
  city,
  country,
}) => (
  <Page>
    <h1 className="pagetitle">s'enregistrer </h1>
    <form className="signup__form">

      <Field
        name="email"
        placeholder="Email"
        onChange={changeField}
        value={email}
        type="email"
      />
      <Field
        name="password"
        placeholder="Mot de Passe"
        onChange={changeField}
        value={password}
        type="password"
      />
      <Field
        name="confirm"
        placeholder="Confirmer le mot de passe"
        onChange={changeField}
        value={confirm}
        type="password"
      />
      <Field
        name="firstname"
        placeholder="Prénom"
        onChange={changeField}
        value={firstname}
      />
      <Field
        name="lastname"
        placeholder="Nom"
        onChange={changeField}
        value={lastname}
      />
      <Field
        name="phone_number"
        placeholder="Telephone"
        onChange={changeField}
        value={phoneNumber}
      />
      <fieldset className="signup__address">
        <legend className="signup__address__legend">Adresse </legend>
        <div className="fieldwrapper">
          <Field
            name="number"
            placeholder="Numero"
            onChange={changeField}
            value={number}
            className="signup__address__field signup__address__field--numero"
          />
          <Field
            name="street_name"
            placeholder="Nom de Rue"
            onChange={changeField}
            value={streetName}
            className="signup__address__field"
          />
          <Field
            name="zipcode"
            placeholder="Code postal"
            onChange={changeField}
            value={zipcode}
            className="signup__address__field signup__address__field--zipcode"
          />
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeField}
            value={city}
            className="signup__address__field"
          />
          <Field
            name="country"
            placeholder="Pays"
            onChange={changeField}
            value={country}
            className="signup__address__field signup__address__field--country"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="signup__button"
      >
        S'inscrire
      </button>
    </form>
  </Page>
);

export default Signup;

Signup.propTypes = {
  changeField: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  streetName: PropTypes.string.isRequired,
  zipcode: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
