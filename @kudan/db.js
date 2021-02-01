const Sequelize = require('sequelize');
const root = require('./root');

const User = root.define('m_user', {
    nip: {
      type: Sequelize.NUMBER,
    },
    nama: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    akses: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  }, {
    root,
    timestamps: false,
    tableName:'m_user'
  });

  const SuratJalan = root.define('surat_jalan', {
    dari: {
      type: Sequelize.STRING
    },
    kepada: {
      type: Sequelize.STRING
    },
    tanggal: {
      type: Sequelize.DATE
    },
    noSurat: {
      type: Sequelize.STRING
    },
    ket: {
      type: Sequelize.STRING
    },
    barangId: {
      type: Sequelize.BIGINT
    }
  }, {
    root,
    timestamps: false,
    tableName:'surat_jalan'
  });

  const Barang = root.define('barang', {
    nama: {
      type: Sequelize.STRING
    },
    jenis_barang: {
      type: Sequelize.STRING
    },
    jumlah: {
      type: Sequelize.INTEGER
    },
    jumlah_all: {
      type: Sequelize.INTEGER
    },
    lokasi: {
      type: Sequelize.STRING
    }
  }, {
    root,
    timestamps: false,
    tableName:'barang'
  });

  module.exports = {User,SuratJalan,Barang};