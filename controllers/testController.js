exports.test = (req, res) => {
  res.json({ message: "Test Route Working Fine" });
};

//POST DATA INTO DATABASE
exports.postData = (req, res) => {
  const { firstname, lastname, mobile, email } = req.body;
  req.app
    .knexConnection("user_table")
    .insert({
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      email: email,
    })
    .then((response) => {
      res.status(200).json({
        status: true,
        message: "Record Inserted Successfully",
        Records: response,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: "Record Insertion Failed",
        Records: err,
      });
    });
};

//GET ALL DATA
exports.getAllData = (req, res) => {
  req.app.knexConnection
    .select()
    .from("user_table")
    .then((response) => {
      res.status(200).json({
        status: true,
        message: "All Records fetched Successfully",
        Records: response,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: "Redords failed to fetch",
        Records: err,
      });
    });
};

//GET SINGLE DATA
exports.getSingleData = (req, res) => {
  req.app.knexConnection
    .select()
    .from("user_table")
    .where("_id ", [req.params._id])
    .then((response) => {
      res.status(200).json({
        status: true,
        message: "Record fetched Successfully",
        Records: response,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: "Redord failed to fetch",
        Records: err,
      });
    });
};

//DELETE DATA
exports.deleteData = (req, res) => {
  req.app.knexConnection
    .delete()
    .from("user_table")
    .where("_id ", [req.params._id])
    .then((response) => {
      res.status(200).json({
        status: true,
        message: "Record Deleted Successfully",
        Records: response,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: "Record failed to Delete",
        Records: err,
      });
    });
};

//UPDATE DATA
exports.updateData = (req, res) => {
  const { firstname, lastname, mobile, email } = req.body;
  req.app
    .knexConnection("user_table")
    .where("_id ", [req.params._id])
    .update({
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
      email: email,
    })
    .then((response) => {
      res.status(200).json({
        status: true,
        message: "Record Updated Successfully",
        Records: response,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: false,
        message: "Records Failed to Update",
        Records: err,
      });
    });
};
