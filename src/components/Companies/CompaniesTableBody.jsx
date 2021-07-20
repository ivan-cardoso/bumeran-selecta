import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleRecruiter } from "../../store/recruiter/actions";
import styles from '../RecruiterForm/index.module.css'
import { Popconfirm, message } from "antd";
import { getCompanies } from "../../store/companies/companies";

function CompaniesTableBody({ companies, setShowTable, setUpdateInfo }) {


  const dispatch = useDispatch();

  
  const handleDelete = (id) => {
    axios.delete(`/api/companies/${id}`).then((res) => {
      message.success("Compañia eliminada");
      dispatch(getCompanies());
    });
  };

  const history = useHistory();

  //   const handleSingleView = (recruiter) => {
  //     dispatch(singleRecruiter(recruiter))
  //     history.push(`/recruiters/${recruiter.id}`)
  // }
  return (
    <TableBody>
      {companies
        ? companies.map((company) => {
            const { name, state, email, id } = company;

            return (
              <TableRow key={id}>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{state.name}</TableCell>
                <TableCell align="right">
                  {
                    <button
                      className={styles.editButton}
                      onClick={() => {
                        setShowTable(false);
                        setUpdateInfo(company);
                      }}
                    >
                      <EditIcon />
                    </button>
                  }
                </TableCell>
                <TableCell align="right">
                  <Popconfirm
                    title={`¿estas seguro que deseas eliminar esta compañia?`}
                    onConfirm={() => handleDelete(id)}
                    okText="confirmar"
                    cancelText="cancelar"
                  >
                    <button className={styles.deleteButton}>
                      <DeleteIcon />
                    </button>
                  </Popconfirm>
                </TableCell>
                <TableCell align="right">
                  <button
                    className={
                      styles.singleViewButton
                    } /* onClick={() => handleSingleView(recruiter)} */
                  >
                    {<VisibilityIcon />}
                  </button>
                </TableCell>
              </TableRow>
            );
          })
        : null}
    </TableBody>
  );
}

export default CompaniesTableBody;
