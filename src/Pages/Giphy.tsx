import React, { useState } from "react";
import { GifsResult, GiphyFetch } from "@giphy/js-fetch-api";
import Layout from "../wrappers/Layout";
import { Button, Grid, Paper, TextField } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useFormik } from "formik";
const apiKey = "Q1zMo06wlIP9f8uNtHciLrFq2F7eWt4b";

const Giphy: React.FC = () => {
  const [response, setResponse] = useState<GifsResult>();
  const [loading, setLoading] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      const gf = new GiphyFetch(apiKey);
      setLoading(true);
      gf.search(values.search, { offset, limit: 10 }).then((res) => {
        setResponse(res);
        setLoading(false);
      });
    },
  });
  const [offset, setOffset] = useState<number>(0);
  const handlePageChange = (event: object, page: number) => {
    setOffset((page - 1) * 10);
    formik.handleSubmit();
  };
  return (
    <Layout title="Giphy">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="search"
          label="Search"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <Button type="submit">Search</Button>
      </form>
      {!loading ? (
        <>
          <Grid container spacing={1}>
            {response?.data.map((gif, key) => (
              <Grid key={key} item>
                <Paper>
                  <a href={gif.url}>
                    <img alt={gif.title} src={gif.images.fixed_height.url} />
                  </a>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Pagination
            onChange={handlePageChange}
            count={
              response
                ? Math.ceil(
                    response.pagination.total_count / response.pagination.count,
                  )
                : 0
            }
          />
        </>
      ) : (
        <>Loading</>
      )}
    </Layout>
  );
};
export default Giphy;
