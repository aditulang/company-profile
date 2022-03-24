import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./VisiMisi.css";

const VisiMisi = () => {
  return (
    <Container className="visi-misi-container" fluid>
      <div
        id="visimisi"
        style={{
          position: "absolute",
          marginTop: -100,
        }}
      ></div>

      <Row className="visi-misi-row">
        <div className="visi-misi-title">
          <b>VISI MISI DAN KOMITMEN</b>
        </div>
        <Col className="card-content ms-0">
          <div className="visi-misi-card-title">VISI</div>
          <p>
            Menjadi perusahaan yang unggul di bidang pengembang solusi teknologi
            informasi pada tahun 2018.
          </p>
        </Col>
        <Col className="card-content">
          <div className="visi-misi-card-title">MISI</div>
          <p>
            Mewujudkan impian Customer dalam membangun system yang dapat
            menunjang kebutuhan dalam mempercepat proses bisnisnya.
            <br />
            <br />
            Membangun dan menjaga kepercayaan Customer akan kinerja team yang
            kami miliki.
            <br />
            <br />
            Menjaga dan Meningkatkan kekompakan antar karyawan.
          </p>
        </Col>
        <Col className="card-content">
          <div className="visi-misi-card-title">KOMITMEN</div>
          <p style={{ fontSize: 11 }}>
            DIPERCAYA oleh Customer dan mitra strategis dengan menjunjung tinggi
            kejujuran, tanggung jawab, disiplin dan keterbukaan dalam upaya
            memenuhi komitmen.
            <br />
            <br />
            KEBERSAMAAN antara pengurus perusahaan, karyawan dan mitra strategis
            berdasarkan kepada sinergi, persatuan saling asah, asih dan asuh
            untuk mencapai target dan tujuan perusahaan.
            <br />
            <br />
            UNGGUL dengan berpegang pada profesionalisme, tahan uji dan
            kreativitas dalam upaya meningkatkan kualitas produk dan layanan
            melalui pengembangan design, teknologi dan metode perancangan yang
            efisien dan efektif.
            <br />
            <br />
            KEPUASAN CUSTOMER menjadi tujuan utama dengan tetap memperhatikan
            etika bisnis dan mengacu kepada ketepatan waktu, mutu produk dan
            biaya.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default VisiMisi;
