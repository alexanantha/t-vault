ui = true
storage "file" {
  path = "/opt/tvault/hcorp/data"
}

listener "tcp" {
  address         = "0.0.0.0:8200"
  cluster_address = "0.0.0.0:8201"
  tls_cert_file = "/opt/tvault/certs/tvault.crt"
  tls_key_file  = "/opt/tvault/certs/tvault.key"
}
