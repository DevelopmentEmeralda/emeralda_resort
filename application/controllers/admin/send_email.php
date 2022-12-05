<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Send_email extends CI_Controller {

    /**
     * Kirim email dengan SMTP Gmail.
     *
     */
     public function __construct() {
		parent::__construct();
		$this->load->model('user_m');
	}
	
    public function kirim_email()
    {
        if (isset($_GET['agent'])) { $agent = $_GET['agent']; }
        if (isset($_GET['nama'])) { $nama = $_GET['nama']; }
        if (isset($_GET['nohp'])) { $nohp = $_GET['nohp']; }
        if (isset($_GET['email'])) {  $email = $_GET['email']; }
        if (isset($_GET['alamat'])) { $alamat = $_GET['alamat']; }
        if (isset($_GET['jenis'])) { $jenis = $_GET['jenis']; }
        if (isset($_GET['pesan'])) { $pesan = $_GET['pesan']; }
        
        
        $agentA     = $this->user_m->get_agentuser($agent);
        $emailagent = $agentA['mail'];
        $namaagent  = $agentA['username'];
        
        $agentP     = $this->user_m->get_propertylist($jenis);
        $agentP = get_object_vars($agentP);
        // $agentP     = (object) $agentP;
        //  print_r($agentP[1]->nama);
        $jenisrumah = $agentP['nama'];
         
        // //Array ( [0] => stdClass Object ( [id] => 55186 [language_id] => 1 [property_id] => 32 [option_id] => 10 [value] => Janet UpSlope [value_num] => ) )
        //  echo $jenisrumah;
        // //   var_dump($agentA);
        //   var_dump($agentP);
        // exit;
        
        // echo 
        
        
        // https://yplproduction.emeraldaresortofficial.com/admin/send_email/kirim_email?agent=agus&nama=fajar&nohp08212&email=fafa@gmail.com&alamat=dirumah$jenis=kan&pesan=pesan
        
        // Konfigurasi email
        $config = [
            'mailtype'  => 'html',
            'charset'   => 'utf-8',
            'protocol'  => 'smtp',
            'smtp_host' => 'emeraldaresortofficial.com',
            'smtp_user' => 'info@emeraldaresortofficial.com',  // Email gmail
            'smtp_pass'   => 'Emeralda123!@#',  // Password gmail
            'smtp_crypto' => 'ssl',
            'smtp_port'   => 465,
            'crlf'    => "\r\n",
            'newline' => "\r\n"
        ];
        $linkwa  = "https://wa.me/$nohp";
        $message ="Halo Ka $namaagent, Ola Mau Kasih Info Nih,
                   Ada Enquiry Dari Customer Baru Ya, Ini Informasinya Ya : 
                   Nama   =  $nama
                   No hp  =  $nohp
                   Email  =  $email
                   Alamat =  $alamat
                   Jenis  =  $jenisrumah
                   Pesan  =  $pesan
                   Email Agent = $emailagent";
                 
        // echo $message;
        //  exit;
        // // Load library email dan konfigurasinya
        $this->load->library('email', $config);

        // // Email dan nama pengirim
        $this->email->from('info@emeraldaresortofficial.com', 'Info Emeralda Resort');

        // // Email penerima
        $this->email->to($emailagent); // Ganti dengan email tujuan

        // // Lampiran email, isi dengan url/path file
        // $this->email->attach('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

        // // Subject email
        $this->email->subject('Enqueri Request From Customer');

        // // Isi email
        $this->email->message($message);

        // // Tampilkan pesan sukses atau error
        if ($this->email->send()) {
        //     //echo 'Sukses! email berhasil dikirim.';
            redirect('admin/enquire');
        } else {
            echo 'Error! email tidak dapat dikirim.';
        }
    }
    
    
}