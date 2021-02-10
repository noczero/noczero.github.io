import React, {Component} from "react";

class Footer extends Component {
    render() {
        if (this.props.sharedBasicInfo) {
            var networks = this.props.sharedBasicInfo.social.map(function (network) {
                return (
                    <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
                );
            });
        }

        return (
            <footer>
                <div className="col-md-12">

                    <div className="social-links">{networks}</div>


                        <div className="col-md-4">

                        </div>


                    <div className="copyright py-4 text-center">
                        <div className="container">

                                Copyright &copy;{" "}
                                {this.props.sharedBasicInfo
                                    ? this.props.sharedBasicInfo.name
                                    : "???"}
                                    <br/>
                                <span className="copyright"> Made with <span className="fa fa-heartbeat" style= {{
                                    color : "#f66767",}}></span> in Bandung, Indonesia</span>

                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
