import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import { observer } from 'mobx-react';
import OpStore from '../stores/OpStore';
import db from '../db';

const FormOp = observer(
  class FormOp extends Component {
    state = {value: null};

    saveOp = (e) => {
      var op = this.props.type == "Buy" ? "lastBuy" : "lastSell";
      db.ops.update(1, {op: OpStore.opValue});
      OpStore[op] = OpStore.opValue;
      OpStore.opValue = "";
    }

    handleChange = (e) => OpStore[e.target.name] = e.target.value;

    componentWillMount(){
      db.ops.toArray().then((ops) => JSON.stringify(console.log(ops)));
    }

    render() {
      return(
        <Form>
          <Form.Field>
            <label>{this.props.type}</label>
            <input placeholder='Valor' value={OpStore.opValue} name="opValue"
              onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit' onClick={this.saveOp}>Confirmar</Button>
        </Form>
      )
    }
  }
);

export default FormOp;
